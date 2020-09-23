package views

import kotlinx.css.*
import kotlinx.html.DIV
import react.*
import react.dom.RDOMBuilder
import kotlinx.html.emptyMap
import styled.*

external interface BackgroundImageProps : RProps {
    var icon: String
}

private val backgroundImage = functionalComponent<BackgroundImageProps> { props ->
    styledDiv {
        css {
            display = Display.block
            padding(LinearDimension("0"))
            position = Position.fixed
            top = LinearDimension("0")
            bottom = LinearDimension("0")
            left = LinearDimension("0")
            right = LinearDimension("0")
            zIndex = -1
        }

        // Image
        styledDiv {
            css {
                position = Position.absolute
                background = "url(\"${props.icon}\")"
                backgroundSize = "cover"
                top = LinearDimension("-10%")
                bottom = LinearDimension("10%")
                left = LinearDimension("-10%")
                right = LinearDimension("10%")
                width = LinearDimension("120%")
                height = LinearDimension("120%")
                filter = "blur(20px) brightness(0.7)"
                this.opacity = 1
            }
        }
    }
}

fun RBuilder.backgroundImage(icon: String, handler: BackgroundImageProps.() -> Unit) = child(backgroundImage) {
    attrs {
        this.icon = icon
        handler()
    }
}