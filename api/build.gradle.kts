plugins {
	id("org.springframework.boot") version "3.5.4"
	id("io.spring.dependency-management") version "1.1.7"
	kotlin("jvm") version "1.9.25"
	kotlin("plugin.spring") version "1.9.25"
	kotlin("plugin.jpa") version "1.9.25"
	kotlin("plugin.noarg") version "1.9.25"
	id("io.freefair.lombok") version "8.14.2"
}

group = "xyz.knightj"
version = "0.0.1-SNAPSHOT"
description = "Dictionary web app to improve vocabulary"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher")
	implementation("org.projectlombok:lombok:1.18.38")

	implementation ("org.springframework.boot:spring-boot-starter-security")
	implementation("org.springframework.boot:spring-boot-starter-oauth2-resource-server")

	runtimeOnly("com.h2database:h2:2.3.232")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa:3.5.4")
}

noArg {
	annotation("jakarta.persistence.Embeddable")
	annotation("jakarta.persistence.Entity")
}


kotlin {
	compilerOptions {
		freeCompilerArgs.addAll("-Xjsr305=strict")
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
