package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.functionalComponent
import styled.css
import styled.styledA
import styled.styledImg

external interface LinkIconProps : RProps {
    var link: String
    var icon: String
}

private val linkIcon = functionalComponent<LinkIconProps> { props ->
    styledA (href = props.link) {
        css {
            display = Display.inlineBlock
        }
        styledImg(src = props.icon) {
            css {
                width = 2.em
                height = 2.em
                margin(horizontal = 0.5.em)
            }
        }
    }
}

fun RBuilder.linkIcon(
        link: String,
        icon: String,
        handler: LinkIconProps.() -> Unit
) = child(linkIcon) {
    attrs {
        this.link = link
        this.icon = icon
        handler()
    }
}