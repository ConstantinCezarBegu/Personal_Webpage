package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.dom.a
import react.functionalComponent
import styled.css
import styled.styledImg

external interface LinkIconProps : RProps {
    var link: String
    var icon: String
}

private val linkIcon = functionalComponent<LinkIconProps> { props ->
    a(href = props.link) {
        styledImg(src = props.icon) {
            css {
                display = Display.inlineBlock
                width = LinearDimension("2em")
                height = LinearDimension("2em")
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