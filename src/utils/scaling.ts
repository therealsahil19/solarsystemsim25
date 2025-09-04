// src/utils/scaling.ts
import * as THREE from 'three';
import { ScalePreset } from '../state/store';

export interface ScaleTransition {
    active: boolean;
    progress: number;
    fromPreset: ScalePreset;
    toPreset: ScalePreset;
}

const BASE_DISTANCE_SCALE = 150.0; // Corresponds to 1 AU in scene units (meters)

function calculateDisplayPositionForPreset(positionAu: THREE.Vector3, preset: ScalePreset): THREE.Vector3 {
    // Validate inputs
    if (!positionAu || typeof positionAu.x !== 'number' || typeof positionAu.y !== 'number' || typeof positionAu.z !== 'number') {
        console.warn('calculateDisplayPositionForPreset: Invalid positionAu:', positionAu);
        return new THREE.Vector3(0, 0, 0);
    }

    if (!preset || !['realistic', 'educational', 'hybrid'].includes(preset)) {
        console.warn('calculateDisplayPositionForPreset: Invalid preset:', preset);
        return new THREE.Vector3(0, 0, 0);
    }

    try {
        const distanceAu = positionAu.length();
        if (distanceAu === 0) {
            return new THREE.Vector3(0, 0, 0);
        }

        // Ensure distanceAu is positive to avoid issues with math functions
        if (distanceAu < 0) {
            console.warn('calculateDisplayPositionForPreset: Negative distanceAu:', distanceAu);
            return new THREE.Vector3(0, 0, 0);
        }

        let displayDistance: number;

        switch (preset) {
            case 'realistic':
                displayDistance = distanceAu * BASE_DISTANCE_SCALE;
                break;
            case 'educational':
                displayDistance = Math.pow(distanceAu, 0.6) * BASE_DISTANCE_SCALE;
                break;
            case 'hybrid':
                // Ensure distanceAu > 0 for log1p
                displayDistance = Math.log1p(Math.max(distanceAu, Number.EPSILON)) * BASE_DISTANCE_SCALE;
                break;
            default:
                console.warn('calculateDisplayPositionForPreset: Unknown preset:', preset);
                displayDistance = distanceAu * BASE_DISTANCE_SCALE; // fallback
        }

        // Ensure displayDistance is a valid number
        if (!isFinite(displayDistance)) {
            console.warn('calculateDisplayPositionForPreset: Invalid displayDistance:', displayDistance);
            return new THREE.Vector3(0, 0, 0);
        }

        return new THREE.Vector3().copy(positionAu).setLength(displayDistance);
    } catch (error) {
        console.warn('calculateDisplayPositionForPreset: Error during calculation:', error);
        return new THREE.Vector3(0, 0, 0);
    }
}

export function calculateDisplayPosition(positionAu: THREE.Vector3, transition: ScaleTransition): THREE.Vector3 {
    // Validate input
    if (!positionAu || typeof positionAu.x !== 'number' || typeof positionAu.y !== 'number' || typeof positionAu.z !== 'number') {
        console.warn('calculateDisplayPosition: Invalid positionAu:', positionAu);
        return new THREE.Vector3(0, 0, 0);
    }

    if (!transition || typeof transition.active !== 'boolean') {
        console.warn('calculateDisplayPosition: Invalid transition object:', transition);
        return new THREE.Vector3(0, 0, 0);
    }

    try {
        if (transition.active) {
            const startPos = calculateDisplayPositionForPreset(positionAu, transition.fromPreset);
            const endPos = calculateDisplayPositionForPreset(positionAu, transition.toPreset);

            // Validate intermediate results
            if (!startPos || typeof startPos.x !== 'number' || !endPos || typeof endPos.x !== 'number') {
                console.warn('calculateDisplayPosition: Invalid intermediate positions in transition');
                return new THREE.Vector3(0, 0, 0);
            }

            return new THREE.Vector3().lerpVectors(startPos, endPos, transition.progress);
        } else {
            return calculateDisplayPositionForPreset(positionAu, transition.toPreset);
        }
    } catch (error) {
        console.warn('calculateDisplayPosition: Error during calculation:', error);
        return new THREE.Vector3(0, 0, 0);
    }
}

const REALISTIC_SIZE_SCALE = 0.000005;
const EDUCATIONAL_SIZE_SCALE = 0.0002;
const HYBRID_SIZE_SCALE = 0.0001;

function getDisplayRadiusForPreset(radiusKm: number, preset: ScalePreset): number {
    switch (preset) {
        case 'realistic':
            return radiusKm * REALISTIC_SIZE_SCALE;
        case 'educational':
            return radiusKm * EDUCATIONAL_SIZE_SCALE;
        case 'hybrid':
            return radiusKm * HYBRID_SIZE_SCALE;
    }
}

export function getDisplayRadius(radiusKm: number, transition: ScaleTransition): number {
    if (transition.active) {
        const startRadius = getDisplayRadiusForPreset(radiusKm, transition.fromPreset);
        const endRadius = getDisplayRadiusForPreset(radiusKm, transition.toPreset);
        return startRadius + (endRadius - startRadius) * transition.progress;
    } else {
        return getDisplayRadiusForPreset(radiusKm, transition.toPreset);
    }
}
