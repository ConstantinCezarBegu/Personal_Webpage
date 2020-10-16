package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.functionalComponent
import styled.css
import styled.styledDiv
import styled.styledH2
import styled.styledImg

external interface IconTextProps : RProps {
    var icon: String
    var text: String
}

private val iconText = functionalComponent<IconTextProps> { props ->
    styledDiv {
        css {
            display = Display.flex
            margin(bottom = 2.em)
        }
        styledImg(src = props.icon) {
            css {
                padding(right = 2.em)
            }
            attrs {
                height = "32em"
                width = "32em"
            }
        }
        styledH2 {
            css {
                margin(all = 0.em)
            }
            +props.text
        }
    }
}

fun RBuilder.iconText(
        icon: String,
        text: String,
        handler: IconTextProps.() -> Unit
) = child(iconText) {
    attrs {
        this.icon = icon
        this.text = text
        handler()
    }
}