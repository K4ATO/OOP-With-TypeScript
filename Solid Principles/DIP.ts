/*
    Dependency Inversion Principle (DIP)
        this principle states that entities should depend on 
        abstractions (interfaces) as opposed to depending on concretion (classes).
*/

/*
    From LSP example, FavouritesController has a dependency on ISaveService interface,
    we could use CookieSaveService class instead but this is a violation of DIP
    because FavouritesController depends on a concrete implementation (CookieSaveService)
*/

/*
    so the best practice is what we did, your dependency should be on interfaces not concretion.
*/
interface ISaveService {
    save(value: string): string;
}
