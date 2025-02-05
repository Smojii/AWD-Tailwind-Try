function ToggleRedBlue(id){
    const element = document.getElementById("id");
    if(element.classList.contains("bg-red-500")){
        element.classList.remove("bg-red-500");
        element.classList.add("bg-blue-500");
    } else {
        element.classList.remove("bg-blue-500");
        element.classList.add("bg-red-500");
    }
}

const navlist = [
    {
        name: "Home",
        href: ""
    },
    {
        name: "About",
        href: "about.html"
    },
    {
        name: "Contacts",
        href: "contacts.html"
    },
    {
        name: "Buy Now",
        href: "buy.html"
    }
]

function SetNavigationButtonGroup(){
    const navContainer = document.getElementById("navBntcontainer");

    navlist.forEach((nav) => {
        const newA = document.createElement("a");
        newA.href = nav;

        newA.classList.add("border");
        newA.classList.add("rounded-lg");
        newA.classList.add("py-2");
        newA.classList.add("py-4");

        navContainer.appendChild(newA);
})
}

SetNavigationButtonGroup();

