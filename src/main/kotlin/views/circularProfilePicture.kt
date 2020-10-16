package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.functionalComponent
import styled.css
import styled.styledA
import styled.styledImg

external interface CircularProfilePictureProps : RProps {
    var link: String
    var icon: String
}

private val circularProfilePicture = functionalComponent<CircularProfilePictureProps> { props ->
    styledA(href = props.link) {
        css {
            display = Display.inlineBlock
        }
        styledImg(src = props.icon) {
            css {
                width = 20.em
                borderWidth = 0.25.em
                borderStyle = BorderStyle.solid
                borderRadius = 50.pct
                borderColor = Color.currentColor
            }
        }
    }
}

fun RBuilder.circularProfilePicture(
        link: String,
        icon: String,
        handler: CircularProfilePictureProps.() -> Unit
) = child(circularProfilePicture) {
    attrs {
        this.link = link
        this.icon = icon
        handler()
    }
}