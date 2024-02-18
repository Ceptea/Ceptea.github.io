let minecraft_location = ""
console.log(navigator.userAgent)
if (navigator.userAgent.includes("Linux")) {
    minecraft_location = "~/.minecraft/"

} else if (navigator.userAgent.includes("Windows")) {
    minecraft_location = "%appdata%\\.minecraft\\"
} else {
    minecraft_location = ".minecraft"
}

document.getElementById("crash-log").innerHTML = `${minecraft_location}crash-reports`
document.getElementById("log").innerHTML = `${minecraft_location}logs`
