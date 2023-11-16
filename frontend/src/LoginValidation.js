function Validation(values) {
    let error = {}
    const username_pattern = /^[^\s@]/
    const password_pattern = /[a-zA-Z0-9]{3,}$/

    if(values.username === ""){
        error.username = "Username should not be empty"
    }
    else if(!username_pattern.test(values.username)){
        error.username = "Username Didn't Match"
    }
    else{
        error.username = ""
    }

    if(values.password === ""){
        error.password = "Password Should Not Be Empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password Didn't Match"
    }
    else{
        error.password = ""
    }

    return error;
}

export default Validation;