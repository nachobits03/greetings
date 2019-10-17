
class Language{
    constructor(language, greeting){
        this.language = language;
        this.greeting = greeting;
    }

    getGreeting(){
        return `${this.greeting}`;
    }

    toString(){
        return `${this.language}`;
    }

    equals(language){
        if(language == this.language){
            return true;
        }
        else{
            return false;
        }
    }

}
Language.ENGLISH = new Language("english", "Hello");
Language.JAPANESE = new Language("japanese", "Kon'nichiwa");
Language.ITALIAN = new Language("italian", "Ciao");