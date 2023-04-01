// get form from DOM

const form = document.querySelector('form')

// add event listener to form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // use built in FormData api
    const formData = new FormData(form);
    /////////// FormData methods ///////////
    // append()
    // delete()
    // entries()
    // forEach()
    // get()
    // getAll()
    // has()
    // keys()
    // set()
    // values()
    ////////////////////////////////////////

    // get data from formData object
    const email = formData.get('email');
    const name = formData.get('name');
    
    // Do something with the data
    console.log('FormData ---> ', name, email);
})