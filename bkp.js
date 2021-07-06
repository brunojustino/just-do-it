edit.addEventListener("click", () => {
    li.remove()
    let liForm = ce("li")
    let input = ce("input")
    input.type = "text"
    input.id = "projectName"
    input.value = projectName
    let btn = cec("BUTTON", "btn")
    btn.id = "addBtn"
    btn.textContent = "Add"
    liForm.appendChild(input)
    liForm.appendChild(btn)
    ul.appendChild(liForm)
    btn.addEventListener("click", () => {
        let projectName = document.getElementById("projectName").value
        document.getElementById("addBtn").parentElement.remove();
        let li = ce("li")
        li.id = projectName
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

        remove.addEventListener("click", () => {
            li.remove()
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
            btn.addEventListener("click", () => {
                let projectName = document.getElementById("projectName").value
                document.getElementById("addBtn").parentElement.remove();
                let li = ce("li")
                li.id = projectName
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

                remove.addEventListener("click", () => {
                    li.remove()
                })
            })

        })
    })

})