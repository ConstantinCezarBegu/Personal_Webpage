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
            margin(LinearDimension("0"))
            width = LinearDimension("100%")
            height = LinearDimension("0.2em")
        }
    }
}

fun RBuilder.lineSeparator(handler: RProps.() -> Unit) = child(lineSeparator) {
    attrs {
        handler()
    }
}