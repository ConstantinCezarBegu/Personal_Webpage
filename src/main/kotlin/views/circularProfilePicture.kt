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
    styledA (href = props.link) {
        css {
            display = Display.inlineBlock
        }
        styledImg(src = props.icon) {
            css {
                width = LinearDimension("20em")
                borderWidth = LinearDimension("0.25em")
                borderStyle = BorderStyle.solid
                borderRadius = LinearDimension("50%")
                borderColor = Color.currentColor
            }
        }
    }
}

fun RBuilder.circularProfilePicture(link: String, icon: String, handler: CircularProfilePictureProps.() -> Unit) = child(circularProfilePicture) {
    attrs {
        this.link = link
        this.icon = icon
        handler()
    }
}