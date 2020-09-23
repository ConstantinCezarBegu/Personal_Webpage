import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.css.*
import org.w3c.dom.events.Event
import react.dom.*
import react.useEffect
import react.useEffectWithCleanup
import react.useLayoutEffectWithCleanup
import react.useState
import segment.introSegment
import styled.css
import styled.styledDiv
import views.backgroundImage

fun main() {
    render(document.getElementById("root")) {

        backgroundImage(icon = "drawable/background.png"){}
        styledDiv {
            css {
                color = Color("#fff")
            }
            introSegment {}
            h3 {
                +"testingh"
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
            h3 {
                +"testing"
            }
            h3 {
                +"testing"
            }
        }
    }
}