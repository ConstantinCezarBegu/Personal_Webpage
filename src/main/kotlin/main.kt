import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.css.*
import kotlinx.css.properties.border
import org.w3c.dom.events.Event
import react.dom.*
import react.useEffect
import react.useEffectWithCleanup
import react.useLayoutEffectWithCleanup
import react.useState
import segment.introSegment
import styled.*
import views.backgroundImage
import views.lineSeparator

fun main() {
    render(document.getElementById("root")) {

        backgroundImage(icon = "drawable/background.png") {}
        styledDiv {
            css {
                color = Color("#fff")
            }
            introSegment {}

            styledDiv {
                css {
                    display = Display.flex
                    flex(1.0)
                    flexDirection = FlexDirection.column
                    justifyContent = JustifyContent.center
                    alignItems = Align.center
                }
                h2 {
                    +"Work Experience"
                }
                lineSeparator {}
                styledDiv {
                    css {
                        marginTop = LinearDimension("0")
                        backgroundColor = Color("rgba(52, 52, 52, 0.5)")
                        width = LinearDimension("100%")
                    }
                    styledH3 {
                        css { marginTop = LinearDimension("0") }
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    h3 {
                        +"testing"
                    }
                    styledH3 {
                        css { marginBottom = LinearDimension("0") }
                        +"testing"
                    }
                }
                lineSeparator {}
            }


        }
    }
}