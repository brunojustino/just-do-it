//helpers functions  
const ce = (e) => {
    return document.createElement(e)
}

const cec = (e, name) => {
    let r = document.createElement(e)
    r.className = name
    return r
}


let content = document.getElementById("content")

let header = cec("div", "header")
header.innerHTML = `
<h2 class="underline--magical">Just Do It</h2>
<p>Create your projects to-do lists and achieve your goals</p>
`
content.appendChild(header)

let divProject = cec("div", "projects")
divProject.innerHTML = `<h3 class="projectTitle">Your Projects <span id="addProjectBtn"><i style="color: green" class="far fa-plus-square"></i></span></h3> 
<ul id="projectUl"> </ul>
`
content.appendChild(divProject)


    let ul = document.getElementById("projectUl")
    let addProjectBtn = document.getElementById("addProjectBtn")
    addProjectBtn.addEventListener("click", () => {
        createForm()
    }) 

    function createForm(){
        let liForm = ce("li")
        let input = ce("input")
        input.type = "text"
        input.id = "projectName"
        let btn = cec("BUTTON", "btn")
        btn.id = "addBtn"
        btn.textContent = "Add"
        liForm.appendChild(input)
        liForm.appendChild(btn)
        ul.appendChild(liForm)
        createProjectLi(btn)
    }

function createProjectLi(btn){
    btn.addEventListener("click", () => {
        let projectName = document.getElementById("projectName").value
        document.getElementById("addBtn").parentElement.remove();
        let li = ce("li")
        li.id = projectName
        li.dataset.name = projectName
        li.innerText = projectName
        let edit = ce("span")
        edit.id = `edtLi${projectName}`
        let editI = cec("i", "fas fa-edit")
        editI.style.color = "blue"
        edit.appendChild(editI)
        let remove = ce("span")
        remove.id =`removeLi${projectName}`
        let removeI = cec("i", "far fa-trash-alt")
        removeI.style.color = "red"
        remove.appendChild(removeI)
        li.appendChild(edit)
        li.appendChild(remove)
        ul.appendChild(li)

        li.addEventListener("click", (e) => {
            // add mainapp todolist logic
            let projectNameOld = ""
            if(document.getElementsByClassName("mainApp").length == 0){
                projectNameOld = projectName
                let mainApp = cec("div", "mainApp")
                mainApp.innerHTML = `<h2>${projectName} <span id="mainAppForm"><i style="color: green" class="far fa-plus-square"></i></span></h2>`
                let items = cec("div", "items")
                let itemsGeneral = cec("ol", "itemsGeneral")
                items.appendChild(itemsGeneral)

                mainApp.appendChild(items)
                divProject.insertAdjacentElement('afterend', mainApp)
                document.getElementById("mainAppForm").addEventListener("click", (e) => {
                    itemsGeneral.appendChild(mainAppForm())
                    addBtnItem = document.getElementById("addBtnItem")
                    addBtnItem.addEventListener("click", (e) => {
                        let itemName = document.getElementById("projectItemName").value
                        document.getElementById("liForm").remove()
                        //mainAppItem()
                        itemsGeneral.appendChild(mainAppItem(itemName))
                    })
                })
                //let btnItem = document.getElementById("addBtnItem")

               // createForm()
               // createProjectLi() 
            } else if(projectNameOld !== e.target.id){
                let mainApp = document.querySelector(".mainApp")
                mainApp.remove()
                mainApp.innerHTML = `<h2>${e.target.id} <span id="mainAppForm"><i style="color: green" class="far fa-plus-square"></i></span></h2>`
                divProject.insertAdjacentElement('afterend', mainApp)
            }
        })

        edit.addEventListener("click", () => {
            li.remove()
            let liForm = ce("li")
            let input = ce("input")
            input.type = "text"
            input.id = "projectName"
            input.value = projectName
            let btn = cec("BUTTON", "btn")
            btn.id = "addBtn"
            btn.textContent = "Edit"
            liForm.appendChild(input)
            liForm.appendChild(btn)
            ul.appendChild(liForm)
            createProjectLi(btn)
        })

        remove.addEventListener("click", () => {
            li.remove()
        })
    })
}

function mainAppItem(name){
    let li = cec("li", "itemsOptions")
    li.innerHTML = `
    <li class="itemsOptions"><span class="task">${name}</span>
    <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
    <span><i style="color: blue" class="fas fa-edit"></i></span>
    <span><i style="color: red" class="far fa-trash-alt"></i></span>
    `
    return li
}

function mainAppForm(){
    let liForm = ce("li")
    liForm.id = "liForm"
    let input = ce("input")
    input.type = "text"
    input.id = "projectItemName"
    let btn = cec("BUTTON", "btn")
    btn.id = "addBtnItem"
    btn.textContent = "Add"
    liForm.appendChild(input)
    liForm.appendChild(btn)
    return liForm
}

let footer = cec("div", "footer")
footer.innerHTML = `
<p>This site was made as a part of The Odin Project Course</p>
<p>Made By <span class="underline--magical">Bruno Justino</span>. No Rights Reserved</p>
<ul class="icons">
    <li><a href="https://github.com/brunojustino/" target="_blank"><i class='fab fa-github-square'></i></a></li>
    <li><a href="https://www.instagram.com/brunojustino1/" target="_blank"><i class='fab fa-instagram-square'></i></a></li>
</ul>
`
content.appendChild(footer)







