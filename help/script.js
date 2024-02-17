let minecraft_location = ""
if (navigator.userAgent.includes("Linux")) {
    minecraft_location = "~/.minecraft/"

} else if (navigator.userAgent.includes("Windows")) {
    minecraft_location = "%appdata%\\.minecraft\\"
} else {
    return
}



document.getElementById("crash-log").innerHTML = `${minecraft_location}crash-reports`
document.getElementById("log").innerHTML = `${minecraft_location}logs`
