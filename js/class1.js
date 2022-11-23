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
}

// let User = {
//     username: "hyejin",
//     password: "1234"
// };

class UserMain {
    main(){
        let user = new User();

        user.username = "hyejin";
        user.password = "1234";
        user.name = "김혜진";
        user.email = "hyejin@abc.com";

        console.log(user);
    }
}

window.onload = () => {
    let userMain = new UserMain();

    userMain.main();
}