package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.dom.h2
import react.dom.img
import react.functionalComponent
import styled.css
import styled.styledDiv

external interface IconTextProps : RProps {
    var icon: String
    var text: String
}

private val iconText = functionalComponent<IconTextProps> { props ->
    styledDiv {
        css {
            display = Display.flex
            flex(1.0)
            flexDirection = FlexDirection.row
            alignItems = Align.center
        }
        img(src = props.icon) {
            attrs {
                height = 32.toString()
                width = 32.toString()
            }
        }
        h2 {
            +props.text
        }
    }
}

fun RBuilder.iconText(icon: String, text: String, handler: IconTextProps.() -> Unit) = child(iconText) {
    attrs {
        this.icon = icon
        this.text = text
        handler()
    }
}