import kotlinx.browser.document
import kotlinx.css.*
import react.dom.*
import styled.css
import styled.styledDiv
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
                    width = LinearDimension("20em")
                    borderWidth = LinearDimension("0.25em")
                    borderStyle = BorderStyle.solid
                    borderRadius = LinearDimension("50%")
                    borderColor = Color.currentColor
                }
                attrs {
                    src = "profile_picture.jpg"
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