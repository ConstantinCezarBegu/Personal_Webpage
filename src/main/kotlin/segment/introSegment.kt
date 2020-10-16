package segment

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.dom.div
import react.functionalComponent
import styled.css
import styled.styledDiv
import styled.styledH1
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
            alignItems = Align.center
            height = 100.vh
        }
        styledDiv {
            css {
                height = 20.pct
            }
        }
        styledDiv {
            css {
                display = Display.flex
                flex(1.0)
                flexDirection = FlexDirection.column
                alignItems = Align.center
            }
            circularProfilePicture(link = "", icon = "drawable/profile_picture.jpg") {}
            styledH1 {
                css {
                    textAlign = TextAlign.center
                }
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
        styledDiv {
            css {
                height = 30.pct
            }
        }
        styledImg(src = "drawable/chevron-triple-down.svg") {
            css {
                display = Display.inlineBlock
                width = 3.em
                height = 3.em
            }
        }
    }
}

fun RBuilder.introSegment(handler: RProps.() -> Unit) = child(introSegment) {
    attrs {
        handler()
    }
}