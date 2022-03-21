
interface Animal {
     display():void;
}

class Dog implements Animal {
    public display():void {
        console.log("Animal: Dog")
    }
}

var a1 = new Dog();
a1.display();