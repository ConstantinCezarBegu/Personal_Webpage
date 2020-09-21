package segment

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.dom.div
import react.dom.h1
import react.functionalComponent
import styled.css
import styled.styledDiv
import styled.styledImg
import views.circularProfilePicture
import views.iconText
import views.linkIcon


private val introSegment = functionalComponent<RProps> { _ ->
    styledDiv {
        css {
            display = Display.flex
            flex(1.0)
            flexDirection = FlexDirection.column
            justifyContent = JustifyContent.center
            alignItems = Align.center
            height = LinearDimension("100vh")
        }
        styledDiv {
            css {
                height = kotlinx.css.LinearDimension("20%")
            }
        }
        circularProfilePicture(link = "", icon = "drawable/profile_picture.jpg") {}
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
        styledDiv {
            css {
                height = LinearDimension("30%")
            }
        }
        styledImg(src = "drawable/chevron-triple-down.svg") {
            css {
                display = Display.inlineBlock
                width = LinearDimension("3em")
                height = LinearDimension("3em")
            }
        }
    }
}

fun RBuilder.introSegment(handler: RProps.() -> Unit) = child(introSegment) {
    attrs {
        handler()
    }
}