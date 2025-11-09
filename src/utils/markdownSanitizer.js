const marked=require('marked');
const sanitizeHtmlLibrary=require('sanitize-html');
const TurndownService=require('turndown');

function sanitizeMarkdownContent(markdownContent){
    var turndownService = new TurndownService();

    // 1.convert markdown to html
    const convertedHtml=marked.parse(markdownContent);
    console.log("Converted HTML: ", convertedHtml);

    //2. Sanitize HTML
    const sanitizedHtml= sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });

    console.log("Sanitized html: ", sanitizedHtml);

    //3. Convert the Sanitized HTML to Markdown.
    const sanitizedMarkdown=turndownService.turndown(sanitizedHtml);
    console.log(`Sanitized Markdown: ${sanitizedMarkdown}`);

    return sanitizedMarkdown;
}

// const input=`
// # Hello World

// ### this is a markdown

// - something

// <script>alery('wohoo')</script>

// [Link](www.google.com)
// `;

// sanitizeMarkdownContent(input);
module.exports=sanitizeMarkdownContent;