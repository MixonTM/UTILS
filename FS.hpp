/*
	File tool's

	Author: Astroz
*/
#include "Includes.hpp"


namespace fs {
	std::string ReadFile(std::string FilePath = ""); // Read file content
	std::string WriteFile(std::string FilePath = "", std::string Content = ""); // Write's to file, clears file and adds content
	std::string AppendFile(std::string FilePath = "", std::string Content = ""); // Appends to file, adds content
}
