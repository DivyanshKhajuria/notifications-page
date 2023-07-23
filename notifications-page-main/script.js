const users = document.querySelectorAll(".user")
const notificationsCounter = document.getElementById("notifications-counter")
const markAsRead = document.getElementById("mark-as-read")
let dot = document.querySelectorAll(".dot")

markAsRead.addEventListener("click", () => {
    users.forEach((users) => {
        users.classList.remove("unread")
        notificationsCounter.innerText = 0
        dot.forEach((dot) => {
            dot.remove()
        })
    })
})