import sync, { cancelSync } from 'framesync';
import { useRef, useContext, useEffect } from 'react';
import { MotionConfigContext } from '../context/MotionConfigContext.mjs';

function useAnimationFrame(callback) {
    var initialTimestamp = useRef(0);
    var isStatic = useContext(MotionConfigContext).isStatic;
    useEffect(function () {
        if (isStatic)
            return;
        var provideTimeSinceStart = function (_a) {
            var timestamp = _a.timestamp;
            if (!initialTimestamp.current)
                initialTimestamp.current = timestamp;
            callback(timestamp - initialTimestamp.current);
        };
        sync.update(provideTimeSinceStart, true);
        return function () { return cancelSync.update(provideTimeSinceStart); };
    }, [callback]);
}

export { useAnimationFrame };
