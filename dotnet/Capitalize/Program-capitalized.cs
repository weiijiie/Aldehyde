Using System;
Using System.Collections.Generic;
Using System.IO;
Using System.Linq;
Using System.Text.RegularExpressions;
Using System.Threading.Tasks;

Namespace Capitalize
{
    Class Program
    {
        Static Async Task Main(string[] Args)
        {
            If (args.Length == 0)
            {
                Console.WriteLine("Please Supply File To Be Capitalized As Argument.");
                Return;
            }

            Var FilePath = $"{Directory.GetCurrentDirectory()}\\{args[0]}";
            Var Lines = File.ReadAllLines(filePath);
            Var OutputName = Args.Length > 1 ? Args[1] : GetOutputName(args[0]);

            Try
            {
                Await WriteLinesCapitalizedAsync(lines, OutputName);
                Console.WriteLine("Capitalized File Written");
            }
            Catch (OperationCanceledException)
            {
                Console.WriteLine("Error Occured");
            }
        }

        Private Static Async Task WriteLinesCapitalizedAsync(IEnumerable<string> Lines, String OutputName)
        {
            Var OutputPath = $"{Directory.GetCurrentDirectory()}\\{outputName}";
            Var CapitalizedLines = Lines.Select(line => New Regex(@"\S+")
                .Replace(line, Match => CapitalizeWord(match.ToString()))
                .ToString());


            Await File.WriteAllLinesAsync(outputPath, CapitalizedLines);
        }

        Private Static String CapitalizeWord(string Word)
        {
            If (word == "")
            {
                Return "";
            }

            Return Word.First().ToString().ToUpper() + Word.Substring(1);
        }

        Private Static String GetOutputName(string OldName)
        {
            Var Ext = OldName.Split(".").Last();
            Return $"{string.Join(".", OldName.Split(".").SkipLast(1))}-capitalized.{ext}";
        }
    }
}
