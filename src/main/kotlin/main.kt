import kotlinx.browser.document
import kotlinx.css.*
import react.dom.*
import styled.css
import styled.styledDiv
import views.circularProfilePicture
import views.iconText
import views.linkIcon

fun main() {
    render(document.getElementById("root")) {
        styledDiv {
            css {
                display = Display.flex
                flex(1.0)
                flexDirection = FlexDirection.column
                justifyContent = JustifyContent.center
                alignItems = Align.center
            }
            circularProfilePicture(icon = "drawable/profile_picture.jpg"){}
            h1 {
                +"Constantin Cezar Begu"
            }
            iconText(icon = "drawable/kotlin_icon.png", text = "Kotlin Developer") {}
            div {
                linkIcon(link = "mailto:constantin.cez.b@gmail.com", icon = "drawable/email-open.svg") {}
                linkIcon(link = "https://www.linkedin.com/in/cezar-begu-a67207196", icon = "drawable/linkedin.svg") {}
                linkIcon(link = "https://github.com/ConstantinCezB", icon = "drawable/github.svg") {}
                linkIcon(link = "https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu", icon = "drawable/google-play.svg") {}
                linkIcon(link = "https://www.youtube.com/channel/UCaOxNPXls62EUa9PUlAq2Ng?view_as=subscriber", icon = "drawable/youtube.svg") {}
            }
        }
    }
}