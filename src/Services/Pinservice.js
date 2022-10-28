const GenerateId = () => {
    return `${(Math.floor(Math.random() * 100_00)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`
}

const Savefolder = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders))
};

export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || []
}

export const Savefolders = async (folderName) => {
    const folders = await getFolders()
    const Newfolder = {
        id:GenerateId(),
        name: folderName,
        pins:[]
    }
    folders.push(Newfolder)
    await Savefolder(folders)
    return Newfolder
}

export const SavePinFolder = async (folderId, pinId) => {
    const folders = await getFolders()
    const folderIndex = folders.findIndex(function(folder){
        return folders.id === folderId
    })
    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId)
    }
    await Savefolder(folders)
    return {...folders[folderIndex]}
}

export const getPins = async () => {
    return[{
        id: "123",
        title: 'trigonometria',
        image:'https://s1.static.brasilescola.uol.com.br/be/2020/09/circulo-trigonometrico.jpg',
        total: 0
    },
    {
        id: "345",
        title: 'matematica',
        image:'https://www.youtz.com.br/wp-content/uploads/2019/10/YOUTZ-MATEMATICA-ENEM.jpg',
        total: 0
    }]
}