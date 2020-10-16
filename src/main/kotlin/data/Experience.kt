package data

data class Experience(
        val videoUrl: String,
        val title: String,
        val description: String,
        val time: String,
        val redirections: List<Redirection>,
)