package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.functionalComponent
import styled.css
import styled.styledHr

private val lineSeparator = functionalComponent<RProps> { _ ->
    styledHr {
        css {
            border = "none"
            color = Color.currentColor
            backgroundColor = Color.currentColor
            margin(0.em)
            width = 100.pct
            height = 0.2.em
        }
    }
}

fun RBuilder.lineSeparator(handler: RProps.() -> Unit) = child(lineSeparator) {
    attrs {
        handler()
    }
}