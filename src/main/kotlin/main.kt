import kotlinx.browser.document
import kotlinx.css.*
import kotlinx.html.classes
import react.dom.*
import styled.css
import styled.styledDiv
import styled.styledH2
import styled.styledImg

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
            styledImg {
                css {
                    width = LinearDimension("10em")
                    border = "0.25em solid"
                    borderRadius = LinearDimension("50%")
                    borderColor = Color.currentColor
                }
                attrs {
                    src = "kotlin_icon.png"
                }
            }
            h1 {
                +"Constantin Cezar Begu"
            }
            styledDiv {
                css {
                    display = Display.flex
                    flex(1.0)
                    flexDirection = FlexDirection.row
                    alignItems = Align.center
                }
                img {
                    attrs {
                        src = "kotlin_icon.png"
                        height = 32.toString()
                        width = 32.toString()
                    }
                }
                h2 {
                    +"Kotlin Developer"
                }

            }
        }


    }
}