using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Capitalize
{
    class Program
    {
        static async Task Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.WriteLine("Please supply file to be capitalized as argument.");
                return;
            }

            var filePath = $"{Directory.GetCurrentDirectory()}\\{args[0]}";
            var lines = File.ReadAllLines(filePath);
            var outputName = args.Length > 1 ? args[1] : GetOutputName(args[0]);

            try
            {
                await WriteLinesCapitalizedAsync(lines, outputName);
                Console.WriteLine("Capitalized file written");
            }
            catch (OperationCanceledException)
            {
                Console.WriteLine("Error occured");
            }
        }

        private static async Task WriteLinesCapitalizedAsync(IEnumerable<string> lines, string outputName)
        {
            var outputPath = $"{Directory.GetCurrentDirectory()}\\{outputName}";
            var capitalizedLines = lines.Select(line => new Regex(@"\S+")
                .Replace(line, match => CapitalizeWord(match.ToString()))
                .ToString());


            await File.WriteAllLinesAsync(outputPath, capitalizedLines);
        }

        private static string CapitalizeWord(string word)
        {
            if (word == "")
            {
                return "";
            }

            return word.First().ToString().ToUpper() + word.Substring(1);
        }

        private static string GetOutputName(string oldName)
        {
            var ext = oldName.Split(".").Last();
            return $"{string.Join(".", oldName.Split(".").SkipLast(1))}-capitalized.{ext}";
        }
    }
}