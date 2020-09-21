package views

import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.functionalComponent
import styled.css
import styled.styledImg

external interface CircularProfilePictureProps : RProps {
    var icon: String
}

private val circularProfilePicture = functionalComponent<CircularProfilePictureProps> { props ->
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

fun RBuilder.circularProfilePicture(icon: String, handler: CircularProfilePictureProps.() -> Unit) = child(circularProfilePicture) {
    attrs {
        this.icon = icon
        handler()
    }
}