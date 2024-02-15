let sideBarShow = true

document.querySelector(".navBarMenuGetSidBarBtn").addEventListener("click", ()=>{

    if (sideBarShow === true) {
        document.querySelector(".contentsBar_SideBar").style.display = "flex"

        setTimeout(() => {
            document.querySelector(".contentsBar_SideBarCards").style.marginLeft = "0"
            document.querySelector(".contentsBar_SideBarCards").style.opacity = "1"
        }, 300);

        sideBarShow = false
    }else if (sideBarShow === false) {
        document.querySelector(".contentsBar_SideBarCards").style.marginLeft = "-600px"
        document.querySelector(".contentsBar_SideBarCards").style.opacity = "0"
        
        setTimeout(() => {
            document.querySelector(".contentsBar_SideBar").style.display = "none"
        }, 300);

        sideBarShow = true
    }

})



document.querySelector(".contentsBar_SideBarBack").addEventListener("click", ()=>{
    if (sideBarShow === false) {
        document.querySelector(".contentsBar_SideBarCards").style.marginLeft = "-600px"
        document.querySelector(".contentsBar_SideBarCards").style.opacity = "0"

        setTimeout(() => {
            document.querySelector(".contentsBar_SideBar").style.display = "none"
        }, 300);

        sideBarShow = true
    }
})
