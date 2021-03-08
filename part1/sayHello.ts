function sayHello(Name?: string): void  {
    if (Name != null)
        console.log("Hello " + Name)
    else
        console.log("Hello World")
}

sayHello("dsdsqds");