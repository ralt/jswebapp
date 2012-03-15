/**
 * Handling models.
 */

module.exports = {
    // Model for the notes
    notes: function() {
        var that = this
        var getAll = function() {
            return [
                {
                    title: 'Note 1',
                    text: 'Text of the note 1'
                },
                {
                    title: 'Note 2',
                    text: 'Text of the note 2'
                }
            ]
        }
    }
}

