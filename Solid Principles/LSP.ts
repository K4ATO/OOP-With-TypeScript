/*
    Liskov substitution principle (LSP)
        This principle states that we should be able to replace a class in a program
        with another class if both classes implement the same interface.
*/
/*
    2 saving methods can replace each other with LSP
        1- by cookies
        2- by html5 local storage api
*/
interface ISaveService {
    save(value: string): string;
}

class CookieSaveService implements ISaveService {
    public save(value: string): string {
        let id = getUniqueId();
        document.cookie = `${id}=${value}`;
        return id;
    }
}

class LocalStorageSaveService implements ISaveService {
    public save(value: string): string {
        const id = getUniqueId();
        localStorage.setItem(`${id}`, value);
        return id;
    }
}
function getUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

/*
    FavouritesController class uses the saving service
    which has a dependency on ISaveService
*/
class FavouritesController {
    private saveService: ISaveService;
    public constructor(saveService: ISaveService) {
        this.saveService = saveService;
    }
    public saveAsFavourite(articleId: string) {
        return this.saveService.save(articleId);
    }
}

// using cookies
const favController1 = new FavouritesController(new CookieSaveService());
// using local storage
const favController2 = new FavouritesController(new LocalStorageSaveService());
