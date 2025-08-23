package xyz.knightj.my_vocab_vault

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
//@EnableJpaRepositories("xyz.knightj.my_vocab_vault.persistence.repositories")
//@EntityScan("xyz.knightj.my_vocab_vault.persistence.entities")
class MyVocabVaultApplication

fun main(args: Array<String>) {
	runApplication<MyVocabVaultApplication>(*args)
}
