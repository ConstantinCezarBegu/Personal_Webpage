package views

import data.Experience
import kotlinx.css.*
import kotlinx.css.properties.boxShadow
import react.RBuilder
import react.RProps
import react.child
import react.dom.h3
import react.dom.iframe
import react.dom.p
import react.functionalComponent
import styled.*


external interface ExperienceCardProps : RProps {
    var experience: Experience
}

private val experienceCard = functionalComponent<ExperienceCardProps> { props ->
    styledArticle {
        css {
            height = 45.em
            width = 35.em
            padding(1.em)
            borderRadius = 1.em
            backgroundColor = Color("#17141d")
            boxShadow(
                    offsetX = 0.em,
                    offsetY = 0.em,
                    blurRadius = 1.em,
                    color = Color.black
            )
        }
        iframe {
            attrs {
                width = "100%"
                height = "315em"
                src = props.experience.videoUrl
                set("frameborder", 0)
                set("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
                set("allowfullscreen", "")
            }
        }
        styledDiv {
            css {
                padding(1.em)
            }
            h3 {
                +props.experience.title
            }
            styledDiv {
                css {
                    border = "none"
                    padding(all = 1.em)
                    width = LinearDimension.auto
                    height = 13.5.em
                    overflowY = Overflow.auto
                }
                +props.experience.description
            }
            styledP {
                css {
                    fontSize = 0.8.em
                }
                +props.experience.time
            }
            styledDiv {
                css {
                    display = Display.flex
                    justifyContent = JustifyContent.center
                }
                props.experience.redirections.forEach {
                    linkIcon(link = it.url, icon = it.icon) {}
                }
            }
        }
    }
}


fun RBuilder.experienceCard(
        experience: Experience,
        handler: ExperienceCardProps.() -> Unit
) = child(experienceCard) {
    attrs {
        this.experience = experience
        handler()
    }
}