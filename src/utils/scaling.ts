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
    const distanceAu = positionAu.length();
    if (distanceAu === 0) {
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
            displayDistance = Math.log1p(distanceAu) * BASE_DISTANCE_SCALE;
            break;
    }

    return new THREE.Vector3().copy(positionAu).setLength(displayDistance);
}

export function calculateDisplayPosition(positionAu: THREE.Vector3, transition: ScaleTransition): THREE.Vector3 {
    if (transition.active) {
        const startPos = calculateDisplayPositionForPreset(positionAu, transition.fromPreset);
        const endPos = calculateDisplayPositionForPreset(positionAu, transition.toPreset);
        return new THREE.Vector3().lerpVectors(startPos, endPos, transition.progress);
    } else {
        return calculateDisplayPositionForPreset(positionAu, transition.toPreset);
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
