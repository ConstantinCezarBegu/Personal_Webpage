package segment

import data.Experience
import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.dom.h2
import react.functionalComponent
import styled.css
import styled.styledDiv
import views.experienceCard
import views.lineSeparator

external interface ExperienceSegmentProps : RProps {
    var title: String
    var experiences: List<Experience>
}

private val experienceSegment = functionalComponent<ExperienceSegmentProps> { props ->
    styledDiv {
        css {
            display = Display.flex
            flex(1.0)
            flexDirection = FlexDirection.column
            justifyContent = JustifyContent.center
            alignItems = Align.center
            padding(top = 10.em)
        }
        h2 {
            +props.title
        }
        lineSeparator {}
        styledDiv {
            css {
                display = Display.flex
                flexWrap = FlexWrap.wrap
                marginTop = LinearDimension("0")
                backgroundColor = Color("rgba(52, 52, 52, 0.6)")
                width = LinearDimension("100%")
                padding(vertical = 5.em)
                rowGap = RowGap("2.5em")
                columnGap = ColumnGap("2.5em")
                justifyContent = JustifyContent.center
            }
            props.experiences.forEach {
                experienceCard(experience = it) {}
            }
        }
        lineSeparator {}
    }
}

fun RBuilder.experienceSegment(
        title: String,
        experiences: List<Experience>,
        handler: ExperienceSegmentProps.() -> Unit
) = child(experienceSegment) {
    attrs {
        this.title = title
        this.experiences = experiences
        handler()
    }
}