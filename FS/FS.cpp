/*
	File utils

	Author: Astroz
*/
#include "FS.hpp"

std::string fs::ReadFile(std::string Path) {
	if (Path == "")
		return "PROVIDE A FILE 101";

	/* Check if file exist */
	if (!std::filesystem::exists(Path))
		return "PATH NOT FOUND 101";

	/* Open file, and get the content */
	std::string Content = "";
	std::string Line = "";
	std::ifstream File;
	File.open(Path);

	while (!File.eof()) {
		std::getline(File, Line);
		Content += Line+"\n";
	}
	Content.resize(Content.length() - 1);
	File.close();
	
	return std::move(Content);
}

std::string fs::WriteFile(std::string Path, std::string Content) {
	if (Path == "")
		return "PROVIDE A FILE 101";

	/* Check if file exist */
	if (!std::filesystem::exists(Path))
		return "PATH NOT FOUND 101";

	/*Write file*/
	std::ofstream File;
	File.open(Path, std::ios::trunc);
	File << std::move(Content);
	File.close();
	return "DONE 101";
}

std::string fs::AppendFile(std::string Path, std::string Content) {
	if (Path == "")
		return "PROVIDE A FILE 101";

	/* Check if file exist */
	if (!std::filesystem::exists(Path))
		return "PATH NOT FOUND 101";

	/*Write file*/
	std::ofstream File;
	File.open(Path);
	File << std::move(Content);
	File.close();
	return "DONE 101";
}
