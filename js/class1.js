class User{
    // # : private 역할 
    // #username;
    // #password;
    // #name;
    // #email;

        // private 로 선언하였을경우 다음과 같이 만들어주어야함 
    // setUsername(username){
    //     this.#username = username;
    // }
    // getUsername(){
    //     return this.#username;
    // }
        // 싱글톤을 사용할 경우엔 private 이용해야 함 

    username;
    password;
    name;
    email;

    // 생성자
    constructor(username, password, name, email){
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    printName(){
        console.log(this.name+"님의 정보");
    }
}

// let User = {
//     username: "hyejin",
//     password: "1234"
// };

class UserMain {
    // 싱글톤 
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new UserMain();
        }
        return this.#instance;
    }
    main(){
        let user = new User("hyejin","1234","김혜진","hyejin@abc.com");

        // user.username = "hyejin";
        // user.password = "1234";
        // user.name = "김혜진";
        // user.email = "hyejin@abc.com";

        console.log(user);

        localStorage.username = user.username;
        console.log("username: "+localStorage.username);

        user.printName();
    }
}

window.onload = () => {
    let userMain = new UserMain();

    userMain.main();
}