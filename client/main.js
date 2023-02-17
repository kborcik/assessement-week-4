const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const secretBtn = document.getElementById("form")
const secrets = document.getElementById("ul")

const baseURL = 'http://localhost:4000/api'

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const createSecretList = array => {
    secrets.innerHTML = ""
    array.forEach((secret,index) =>{
        let inputSecret = document.createElement('li')

        let secretSpan = document.createElement('span')
        secretSpan.textContent = secret

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.id = index

        let codeBtn = document.createElement('button')
        codeBtn.textContent = "Encrypt Secret"
        codeBtn.id = index

        let decodeBtn = document.createElement('button')
        decodeBtn.textContent = "Decode Secret"
        codeBtn.id = index

        inputSecret.appendChild(secretSpan)
        inputSecret.appendChild(deleteBtn)
        inputSecret.appendChild(codeBtn)
        inputSecret.appendChild(decodeBtn)

        deleteBtn.addEventListener('click', deleteSecret)
        decodeBtn.addEventListener('click', mySecretDecoded)
        codeBtn.addEventListener('click', mySecretCoded)


        secrets.appendChild(inputSecret)
    })

}

const writeSecret = evt => {
    evt.preventDefault()
    axios.post(baseURL +`/${input.value}`)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))

     input.value = ""
}


const deleteSecret = evt =>{
    axios.delete(`http://localhost:4000/api/${evt.target.id}`)
        .then(response => {
            createSecretList(response.data)
        })
        .catch(err => console.log(err))
}


const myCipher ={
    a:'m',
    b:'x',
    c:'o',
    d:'b',
    e:'y',
    f:'s',
    g:'c',
    h:'z',
    i:'j',
    j:'k',
    k:'g',
    l:'a',
    m:'w',
    n:'d',
    o:'u',
    p:'e',
    q:'h',
    r:'v',
    s:'t',
    t:'l',
    u:'f',
    v:'n',
    w:'q',
    x:'i',
    y:'p',
    z:'r'
}

function cipherChar(char) {
    const cipher = myCipher[char]
    if (cipher) {
      return cipher
    } else {
      return char
    }
  }

function getKeyByValue(object, value) {
    for (let key in object) {
      if (object[key] === value) {
        return key;
      }
    }
    return null;
  }

function unCipherChar(char) {

    const uncipher = getKeyByValue(myCipher, char)
    if (uncipher) {
        return uncipher
    } else {
        return char
    }
}


const mySecretCoded = (string) =>{
    let result = ''
    for(let i = 0; i < string.length; i ++){
        const char = string[i]
        result += cipherChar(char)
    }

    return result

}

const mySecretDecoded = (string) =>{
    let result = ''
    for(let i = 0; i < string.length; i ++){
        const char = string[i]
        result += unCipherChar(char)
    }
    return result
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
secretBtn.addEventListener('submit', writeSecret)