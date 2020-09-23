package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.dom.a
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
                width = LinearDimension("2.5em")
                height = LinearDimension("2.5em")
                margin(horizontal = LinearDimension("0.5em"))
            }
        }
    }
}

fun RBuilder.linkIcon(link: String, icon: String, handler: LinkIconProps.() -> Unit) = child(linkIcon) {
    attrs {
        this.link = link
        this.icon = icon
        handler()
    }
}