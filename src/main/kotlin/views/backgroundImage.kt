package views

import kotlinx.css.*
import react.*
import styled.*

external interface BackgroundImageProps : RProps {
    var icon: String
}

private val backgroundImage = functionalComponent<BackgroundImageProps> { props ->
    styledDiv {
        css {
            display = Display.block
            padding(all = 0.em)
            position = Position.fixed
            top = 0.em
            bottom = 0.em
            left = 0.em
            right = 0.em
            zIndex = -1
        }

        styledDiv {
            css {
                position = Position.absolute
                background = "url(\"${props.icon}\")"
                backgroundSize = "cover"
                top = (-10).pct
                bottom = 10.pct
                left = (-10).pct
                right = 10.pct
                width = 120.pct
                height = 120.pct
                filter = "blur(20px) brightness(0.7)"
                this.opacity = 1
            }
        }
    }
}

fun RBuilder.backgroundImage(
        icon: String,
        handler: BackgroundImageProps.() -> Unit
) = child(backgroundImage) {
    attrs {
        this.icon = icon
        handler()
    }
}