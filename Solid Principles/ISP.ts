/*
    Interface Segregation Principle (ISP)
        this principle states that we should split interfaces that
        are very large into smaller and more specific ones
        so that clients will only need to know about the methods
        that are of interest to them.
*/

/*
    If we design an API to control all the elements in a vehicle
    (engine, radio, heating, navigation and lights),
    we could have one general-purpose interface, that allows us
    to control every single element of the vehicle.

    But this is a violation of the ISP because a client shouldn't
    be forced to depend on methods it doesn't use.
 */

/*
    The solution is to split the interface into many client-specific interfaces.
*/
interface VehicleInterface {
    getSpeed(): number;
    getVehicleType(): string;
    isTaxPayed(): boolean;
    isLightsOn(): boolean;
}

interface LightsInterface {
    isLightsOn(): boolean;
    isLightsOff(): boolean;
}

interface RadioInterface {
    startRadio(): void;
    playCd(): void;
    stopRadio(): void;
}

interface EngineInterface {
    startEngine(): void;
    accelerate(): number;
    stopEngine(): void;
}
