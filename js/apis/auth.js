//Verify User
export function verifyAuth(login_username, login_password){
    return fetch("db/fetch_player.php", {
        method: "POST",
        body: JSON.stringify({
            username: login_username,
            password: login_password
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        //Wait & Handle server response
        if(!response.ok){
            throw new Error('Network Error');
        }
        return response.json();
    })
    .then(data => {
        //Process data fetched from server response
        if(data.success === false){
            return false;//wrong user info
        }
        //return true;
        return {success: true, userID: data.userID};
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Unexpected Error" + error.message);
        return false;
    })
}


//Store User
export function storeAuth(register_username, register_password){
    return fetch("db/store_player.php", {
        method: "POST",
        body: JSON.stringify({
            username: register_username,
            password: register_password
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        if (!response.ok){
            throw new Error('Network error');
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        if(data.success === false){
            alert("username taken");
            throw new Error("Terminating process: Username Taken");
        }
        return true;//Sucessful Insertion
    })
    .catch(error =>{
        console.error('Error:', error);
        alert("Unexpected error occured");
        return false;
    })
}