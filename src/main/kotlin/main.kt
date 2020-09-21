import kotlinx.browser.document
import react.dom.*
import segment.introSegment

fun main() {
    render(document.getElementById("root")) {
        introSegment {}
    }
}